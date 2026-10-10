// Import react
import { useNavigate } from "react-router-dom";

// CSS Module
import card_style from "../../styles/card_hover.module.css"

/* Import Mock */
import type { CardMember } from "../../data/card_member_mock"; // Props
import { card_member } from "../../data/card_member_mock"; // mock


export default function CardMambersLayout() {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-4 gap-5">
      {card_member.map((member : CardMember) => (
        <div
          key={member.id}
          className="w-full aspect-square object-cover group relative break-inside-avoid mb-5 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          onClick={() => navigate(`/selected_member/${member.id}`)}
        >
          <img 
            src={member.url_image}
            alt={member.name}
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Hover overlay */}
          <div
            className={`absolute bottom-0 inset-x-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card_style.GlassEffect}`}
          >
            <p className="text-gray-900 font-bold text-base">
              {member.name}
            </p>
          </div>
        </div>
      ))}
    </ section>
  );
}