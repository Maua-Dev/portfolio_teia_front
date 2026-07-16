// 1. Importe como um objeto 'styles'
import card_style from '../../../public/card_hover.module.css'; // CSS

interface MemberCardProps {
  image: string;
  name?: string;
}

export default function CardMambersLayout({ image, name = "Member" }: MemberCardProps){
  return(
    <div className="relative w-full aspect-square overflow-hidden rounded-3xl bg-zinc-800 shadow-md group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-2xl transform-gpu">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* 2. Aplique a classe usando styles.figmaGlassEffect */}
      <div 
        className={`absolute -bottom-[1px] -left-[1px] -right-[1px] h-16 rounded-b-3xl flex items-center px-6 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 ${card_style.figmaGlassEffect}`}
      >
        <span className="text-zinc-900 font-bold text-base truncate">
          {name}
        </span>
      </div>
    </div>
  );
}