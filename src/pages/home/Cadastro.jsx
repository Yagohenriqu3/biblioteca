import  { useState } from "react";
import Logo from "../../assets/home/livrologo.png"; // ajuste o caminho se preciso
import { Link } from 'react-router-dom'

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    rua: "",
    cpf: "",
    cep: "",
    numero: "",
    nascimento: "",
    bairro: "",
    complemento: "",
    contato: "",
    email: "",
    senha: "",
    repetirSenha: "",
  });

  // estados de feedback/validação
  const [cpfValid, setCpfValid] = useState(null);
  const [cpfTouched, setCpfTouched] = useState(false);

  const [emailValid, setEmailValid] = useState(null);
  const [emailTouched, setEmailTouched] = useState(false);

  const [senhaMinOk, setSenhaMinOk] = useState(null);
  const [senhaMatch, setSenhaMatch] = useState(null);
  const [senhaTouched, setSenhaTouched] = useState(false);
  const [repetirTouched, setRepetirTouched] = useState(false);

  const [showSenha, setShowSenha] = useState(false);
  const [showRepetir, setShowRepetir] = useState(false);

  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState("");

  const onlyDigits = (v = "") => v.replace(/\D/g, "");

  const validarCPF = (raw) => {
    const cpf = onlyDigits(raw);
    if (!cpf || cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  };

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setFormData((p) => ({ ...p, [key]: value }));

    if (key === "cpf") {
      const digits = onlyDigits(value);
      if (digits.length === 11) {
        setCpfValid(validarCPF(digits));
        setCpfTouched(true);
      } else {
        setCpfValid(null);
      }
    }

    if (key === "senha") {
      const meets = value.length >= 8;
      setSenhaMinOk(meets);
      if (formData.repetirSenha) {
        setSenhaMatch(value === formData.repetirSenha);
      } else {
        setSenhaMatch(null);
      }
    }

    if (key === "repetirSenha") {
      if (value || formData.senha) {
        setSenhaMatch(formData.senha === value);
      } else {
        setSenhaMatch(null);
      }
    }

    if (key === "cep") {
      setCepError("");
    }
  };

  const handleCpfBlur = () => {
    setCpfTouched(true);
    setCpfValid(validarCPF(formData.cpf));
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailValid(validarEmail(formData.email));
  };

  const handleSenhaBlur = () => {
    setSenhaTouched(true);
    const meets = formData.senha.length >= 8;
    setSenhaMinOk(meets);
    if (formData.repetirSenha) {
      setSenhaMatch(formData.senha === formData.repetirSenha);
    }
  };

  const handleRepetirBlur = () => {
    setRepetirTouched(true);
    if (formData.senha || formData.repetirSenha) {
      setSenhaMatch(formData.senha === formData.repetirSenha);
    }
  };

  const buscarCep = async () => {
    const cepDigits = onlyDigits(formData.cep);
    if (cepDigits.length !== 8) {
      setCepError("CEP inválido");
      return;
    }
    setCepLoading(true);
    setCepError("");
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`);
      const data = await res.json();
      if (data.erro) {
        setCepError("CEP não encontrado");
      } else {
        setFormData((p) => ({
          ...p,
          rua: data.logradouro || "",
          bairro: data.bairro || "",
        }));
      }
    } catch {
      setCepError("Erro ao consultar CEP");
    } finally {
      setCepLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCpfValid = validarCPF(formData.cpf);
    const newEmailValid = validarEmail(formData.email);
    const newSenhaMin = formData.senha.length >= 8;
    const newSenhaMatch = formData.senha === formData.repetirSenha;

    setCpfTouched(true);
    setCpfValid(newCpfValid);
    setEmailTouched(true);
    setEmailValid(newEmailValid);
    setSenhaTouched(true);
    setRepetirTouched(true);
    setSenhaMinOk(newSenhaMin);
    setSenhaMatch(newSenhaMatch);

    if (!(newCpfValid && newEmailValid && newSenhaMin && newSenhaMatch)) {
      alert("Verifique os campos antes de enviar.");
      return;
    }

    alert("Cadastro realizado!");
  };

  const IconOk = () => (
    <span className="text-green-600 font-bold">✔</span>
  );
  const IconFail = () => (
    <span className="text-red-500 font-bold">✖</span>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-4xl ">
    <div className="flex justify-center mb-6">
      <img src={Logo} alt="Bibliotech" className="w-auto h-24" />
    </div>
    <h1 className="text-[#414141] font-bold mb-5 ml-10 text-3xl">Cadastro</h1>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="  grid grid-cols-1 gap-6 text-[#414141] md:w-[70%]">

        {/* DADOS PESSOAIS */}
        <fieldset className="p-4 rounded-md">
          
          <input
            type="text"
            placeholder="Nome completo"
            className="border rounded px-3 py-2 w-full mt-2"
            value={formData.nome}
            onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
          />

          <input
            type="text"
            placeholder="CPF"
            className={`border rounded px-3 py-2 w-full mt-2 pr-10 ${
              cpfTouched && cpfValid === true
                ? "border-green-500"
                : cpfTouched && cpfValid === false
                ? "border-red-500"
                : ""
            }`}
            value={formData.cpf}
            onChange={handleChange("cpf")}
            onBlur={handleCpfBlur}
          />
          <div className="absolute right-3 top-2">
            {cpfTouched && cpfValid === true && <IconOk />}
            {cpfTouched && cpfValid === false && <IconFail />}
          </div>
          {cpfTouched && cpfValid === false && (
            <span className="text-xs text-red-500">CPF inválido</span>
          )}

          <input
            type="date"
            className="border rounded px-3 py-2 w-full mt-2"
            placeholder="Data de Nascimento"
            value={formData.nascimento}
            onChange={(e) => setFormData((p) => ({ ...p, nascimento: e.target.value }))}
          />

          <input
            type="text"
            placeholder="Contato"
            className="border rounded px-3 py-2 w-full mt-2"
            value={formData.contato}
            onChange={(e) => setFormData((p) => ({ ...p, contato: e.target.value }))}
          />
        </fieldset>

        {/* ENDEREÇO */}
        <fieldset className=" p-4 rounded-md mt-4">
          <legend className="font-bold text-[#414141] text-center">Endereço</legend>

          <div className="flex gap-2 mt-2">
            <div className="w-2/3 relative">
              <input
                type="text"
                placeholder="CEP"
                className="border rounded px-3 py-2 w-full"
                value={formData.cep}
                onChange={handleChange("cep")}
                onBlur={buscarCep}
              />
              {cepLoading && (
                <span className="absolute right-3 top-2 text-xs text-gray-500">...</span>
              )}
              {cepError && (
                <span className="absolute left-0 -bottom-5 text-xs text-red-500">
                  {cepError}
                </span>
              )}
            </div>

            <input
              type="text"
              placeholder="Número"
              className="border rounded px-3 py-2 w-1/3"
              value={formData.numero}
              onChange={(e) => setFormData((p) => ({ ...p, numero: e.target.value }))}
            />
          </div>

          <input
            type="text"
            placeholder="Rua"
            className="border rounded px-3 py-2 w-full mt-2"
            value={formData.rua}
            onChange={(e) => setFormData((p) => ({ ...p, rua: e.target.value }))}
          />

          <input
            type="text"
            placeholder="Bairro"
            className="border rounded px-3 py-2 w-full mt-2"
            value={formData.bairro}
            onChange={(e) => setFormData((p) => ({ ...p, bairro: e.target.value }))}
          />

          <input
            type="text"
            placeholder="Complemento"
            className="border rounded px-3 py-2 w-full mt-2"
            value={formData.complemento}
            onChange={(e) => setFormData((p) => ({ ...p, complemento: e.target.value }))}
          />
        </fieldset>

        {/* EMAIL E SENHA */}
        <fieldset className=" p-4 rounded-md mt-4">
          <legend className="font-bold text-[#414141] text-center">Login</legend>

          <input
            type="email"
            placeholder="E-mail"
            className={`border rounded px-3 py-2 w-full mt-2 ${
              emailTouched && emailValid === true
                ? "border-green-500"
                : emailTouched && emailValid === false
                ? "border-red-500"
                : ""
            }`}
            value={formData.email}
            onChange={handleChange("email")}
            onBlur={handleEmailBlur}
          />
          {emailTouched && emailValid === false && (
            <span className="text-xs text-red-500">E-mail inválido</span>
          )}

          <div className="relative mt-2">
            <input
              type={showSenha ? "text" : "password"}
              placeholder="Senha (mín. 8 caracteres)"
              className={`border rounded px-3 py-2 w-full pr-20 ${
                senhaTouched && senhaMinOk === true
                  ? "border-green-500"
                  : senhaTouched && senhaMinOk === false
                  ? "border-red-500"
                  : ""
              }`}
              value={formData.senha}
              onChange={handleChange("senha")}
              onBlur={handleSenhaBlur}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-blue-600"
              onClick={() => setShowSenha((s) => !s)}
            >
              {showSenha ? "Ocultar" : "Ver"}
            </button>
            {senhaTouched && senhaMinOk === false && (
              <span className="absolute left-0 -bottom-5 text-xs text-red-500">
                Senha deve ter no mínimo 8 caracteres
              </span>
            )}
          </div>

          <div className="relative mt-2">
            <input
              type={showRepetir ? "text" : "password"}
              placeholder="Repetir senha"
              className={`border rounded px-3 py-2 w-full pr-10 ${
                (repetirTouched || senhaTouched) && senhaMatch === true
                  ? "border-green-500"
                  : (repetirTouched || senhaTouched) && senhaMatch === false
                  ? "border-red-500"
                  : ""
              }`}
              value={formData.repetirSenha}
              onChange={handleChange("repetirSenha")}
              onBlur={handleRepetirBlur}
            />
            <div className="absolute right-3 top-2">
              {(repetirTouched || senhaTouched) && senhaMatch === true && <IconOk />}
              {(repetirTouched || senhaTouched) && senhaMatch === false && <IconFail />}
            </div>
            {(repetirTouched || senhaTouched) && senhaMatch === false && (
              <span className="absolute left-0 -bottom-5 text-xs text-red-500">
                Senhas não coincidem
              </span>
            )}
          </div>
        </fieldset>

        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded"
          >
            Cadastrar
          </button>

          <p className="text-sm mt-2">
            Já tem um cadastro?{" "}
            <Link to='/login'>
            <a href="#" className="text-blue-600 hover:underline">
              Login
            </a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}
