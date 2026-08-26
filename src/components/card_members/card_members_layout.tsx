import card_style from "../../../public/card_hover.module.css"

interface cardMemberItem{
  id: string;
  url_image: string;
  message_hover: string;
}

const card_member: cardMemberItem[] = [
  {
    id: "member-1",
    url_image: "https://picsum.photos/id/64/500/500",
    message_hover: "José Silva"
  },
  {
    id: "member-2",
    url_image: "https://picsum.photos/id/91/500/500",
    message_hover: "Maria Souza"
  },
  {
    id: "member-3",
    url_image: "https://picsum.photos/id/338/500/500",
    message_hover: "Carlos Eduardo"
  },
  {
    id: "member-4",
    url_image: "https://picsum.photos/id/342/500/500",
    message_hover: "Ana Clara"
  },
  {
    id: "member-5",
    url_image: "https://picsum.photos/id/646/500/500",
    message_hover: "Lucas Oliveira"
  },
  {
    id: "member-6",
    url_image: "https://picsum.photos/id/649/500/500",
    message_hover: "Juliana Mendes"
  },
  {
    id: "member-7",
    url_image: "https://picsum.photos/id/668/500/500",
    message_hover: "Gabriel Santos"
  },
  {
    id: "member-8",
    url_image: "https://picsum.photos/id/669/500/500",
    message_hover: "Beatriz Rocha"
  },
  {
    id: "member-9",
    url_image: "https://picsum.photos/id/696/500/500",
    message_hover: "Felipe Costa"
  }
];

export default function CardMambersLayout() {
  return (
    <>
      {card_member.map((member) => (
        <div
          key={member.id}
          className="group relative break-inside-avoid mb-5 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
        >
          <img 
            src={member.url_image}
            alt={member.message_hover}
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Hover overlay */}
          <div
            className={`absolute bottom-0 inset-x-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card_style.GlassEffect}`}
          >
            <p className="font-overpass text-gray-900 font-bold text-base">
              {member.message_hover}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}