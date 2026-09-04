import card_style from "../../styles/card_hover.module.css"

/* Importando Mock */
import type { CardMember } from "../../data/card_member_mock"; // Props
import { card_member } from "../../data/card_member_mock"; // mock

export default function CardMambersLayout() {
  return (
    <>
      {card_member.map((member: CardMember) => (
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