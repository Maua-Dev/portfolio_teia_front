// Member card Props
interface MemberCardProps {
  image: string;
  name?: string;
}

export default function CardMambersLayout({ image, name = "Member" }: MemberCardProps){
    return(
        <div className="w-full aspect-square overflow-hidden rounded-3xl bg-zinc-800 shadow-md group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
        </div>
    );
}