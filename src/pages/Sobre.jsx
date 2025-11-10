import Qrcode from '../assets/sobre/qrcode.jpg';
import Biblioteca from '../assets/sobre/biblioteca.jpg';
import Adm from '../assets/sobre/adm.jpg';
import Usuariobiblioteca from '../assets/sobre/usuariobiblioteca.jpg';

export default function About() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col gap-16">

      {/* Título principal */}
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-[#0455C0]">
          Sobre o Sistema de Biblioteca
        </h1>
        <p className="text-[#414141] text-lg max-w-3xl">
          Nosso Sistema de Biblioteca foi desenvolvido para modernizar e otimizar a experiência de leitura e gestão de acervos. Combinando tecnologia, praticidade e segurança, o sistema oferece uma solução completa tanto para alunos quanto para administradores da biblioteca.
        </p>
      </header>

      {/* Seção: Inovação e Tecnologia */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-[#0455C0]">Inovação e Tecnologia</h2>
          <p className="text-[#414141]">
            Através do <strong>acesso via QR Code</strong>, cada usuário pode entrar na biblioteca de forma rápida e segura, eliminando processos manuais e aumentando a segurança do ambiente. Além disso, o sistema é totalmente <strong>responsivo</strong>, funcionando em computadores, tablets e smartphones.
          </p>
        </div>
        <figure className="flex-1 bg-gray-200 w-full rounded-lg flex items-center justify-center">
          <img src={Qrcode} alt="Exemplo de QR Code usado na biblioteca" />
        </figure>
      </section>

      {/* Seção: Funcionalidades para Todos */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-[#0455C0]">Funcionalidades para Todos</h2>
          <p className="text-[#414141]">
            <strong>Para alunos:</strong> acesso ao catálogo de livros, histórico de empréstimos, reservas online e notificações de devolução.<br/>
            <strong>Para administradores:</strong> controle completo de usuários, gerenciamento do acervo, relatórios detalhados de acesso e empréstimos.
          </p>
        </div>
        <figure className="flex-1 bg-gray-200 w-full md:h-80 rounded-lg flex items-center justify-center">
          <img src={Adm} alt="Administrador utilizando o sistema em um computador" />
        </figure>
      </section>

      {/* Seção: Gestão Eficiente */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-[#0455C0]">Gestão Eficiente</h2>
          <p className="text-[#414141]">
            Registro de <strong>empréstimos e devoluções</strong>, controle de prazos e alertas de atrasos. A função de <strong>reserva online</strong> garante que os livros desejados estejam disponíveis quando você precisar.
          </p>
        </div>
        <figure className="flex-1 bg-gray-200 w-full md:h-80 rounded-lg flex items-center justify-center">
          <img src={Biblioteca} alt="Biblioteca com estantes e livros organizados" />
        </figure>
      </section>

      {/* Seção: Segurança e Compromisso */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-[#0455C0]">Segurança e Controle</h2>
          <p className="text-[#414141]">
            Com níveis de acesso diferenciados (administrador, funcionário e aluno) e monitoramento via QR Code, o sistema oferece <strong>controle de entrada</strong>, garantindo que o espaço da biblioteca seja utilizado de forma organizada e segura.
          </p>

          <h2 className="text-2xl font-semibold text-[#0455C0] mt-10">Nosso Compromisso</h2>
          <p className="text-[#414141]">
            Fornecer uma ferramenta <strong>prática, moderna e confiável</strong>, que transforma a biblioteca em um ambiente inteligente, acessível e totalmente conectado às necessidades de seus usuários.
          </p>
        </div>
        <figure className="flex-1 bg-gray-200 w-full md:h-80 rounded-lg flex items-center justify-center">
          <img src={Usuariobiblioteca} alt="Usuário utilizando a biblioteca digitalmente" />
        </figure>
      </section>

      {/* Call to Action */}
      <footer className="flex justify-center mt-10">
        <a 
          href="https://wa.me/5521984154881" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <p className="inline-block bg-[#FC951E] text-white text-center px-6 py-3 rounded-full font-semibold text-lg">
            Descubra o futuro da sua biblioteca
          </p>
        </a>
      </footer>
    </section>
  );
}
