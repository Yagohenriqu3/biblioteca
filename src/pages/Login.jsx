import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-6">
          <img
            src={Logo}
            alt="Bibliotech Logo"
            className="mx-auto mb-4"
            style={{ width: '80px' }} 
          />
          <h1 className="text-3xl font-bold text-[#0456BF]">Bibliotech</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Login
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Digite seu E-mail"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <Link to='/login/recuperacaodesenha'>
            <a href="#!" className="text-sm text-blue-600 hover:text-blue-800">
              Esqueceu sua senha?
            </a>
            </Link>
            <button
              type="submit"
              className="bg-[#FC951E] text-white px-6 py-2 rounded-lg hover:bg-[#e47e0a] duration-150 hover:scale-105"
            >
              Entrar
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <Link to='/login/cadastro'>
              <a href="" className="text-blue-600 hover:text-blue-800">
                Cadastrar
              </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
