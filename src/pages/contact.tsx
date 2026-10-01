/* Icon Imports */
import { Phone, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className='px-20 py-5'>
      {/* Contact Info & Map Section */}
      <section className="flex gap-10 justify-center">
        <section className="grid grid-col w-1/3 gap-2">
          <h1>Contato</h1>

          <h2>Onde nos encontrar</h2>

          <p className="font-overpass text-[#757575] text-[17px]">
            Instituto Maua de Tecnologia<br />
            Praça Mauá, 1 - Mauá, São Caetano do Sul - SP,<br />
            09580-900
          </p>

          <div className="flex gap-2 items-center">
            <Phone size={28} color='green'/>
            <p className='font-overpass text-[#757575] overpass-align'>+55 11 87455-3456</p>
          </div>

          <a href="https://www.instagram.com/teiacriativa.maua/"
            target='_blank'
            className='flex gap-2 items-center'
          >
            <FaInstagram size={30} color="#E1306C"/>
            <p className="font-overpass text-[#757575] font-bold overpass-align">teiacriativa.maua</p>
          </a>                  
        </section>

        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2532.5964419798634!2d-46.57539064738934!3d-23.64876780103283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce434992a4cad7%3A0x75aa65b7b5099c2!2sInstituto%20Mau%C3%A1%20de%20Tecnologia!5e0!3m2!1spt-BR!2sus!4v1783026731096!5m2!1spt-BR!2sus"
          className="w-2/3 h-[400px] p-2 rounded-2xl border-0 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
        />
      </section>

      {/* Contact Form Section */}
      <h2 className='mt-10 mb-5'>Fale conosco:</h2>
      <form className='grid grid-cols-2 gap-10 items-center px-45'>
        <input type="text"  
          placeholder='Email' 
          className='border rounded-xl h-[70px] p-5 placeholder:text-center'
        />
        <input type="text" 
          placeholder='Nome Completo' 
          className='border rounded-xl h-[70px] p-5 placeholder:text-center'
        />
        <input type="text"  
          placeholder='Insituição' 
          className='border rounded-xl h-[70px] p-5 placeholder:text-center'
        />
        <input type="text"  
          placeholder='Telefone' 
          className='border rounded-xl h-[70px] p-5 placeholder:text-center'
        />
        
        <div className="relative col-span-2">
          <textarea 
            id="mensagem"
            className="peer border rounded-xl p-4 min-h-[120px] w-full resize-none text-center focus:text-left"
            required
          />
          {/*
            // peer-focus:hidden  -> Hides this element when the input (peer) is focused
            // peer-valid:hidden  -> Hides this element when the input (peer) contains text
          */}
          <label
            className="absolute inset-0 flex items-center justify-center pointer-events-none text-gray-400 peer-focus:hidden peer-valid:hidden"
          > 
            Mensagem
          </label>
        </div>

        <button 
          type='submit' 
          className='col-span-2 justify-self-end w-fit flex items-center gap-2 bg-[#272152] text-white rounded-full px-15 py-3 hover:bg-[#1f1a42] transition-colors'
        >
          Enviar 
          <ArrowRight size={20} />
        </button>
      </form>
    </main>
  )
}