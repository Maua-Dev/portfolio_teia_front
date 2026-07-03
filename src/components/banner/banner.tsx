//Banner Props
interface BannerProps {
  image: string;
  altText?: string;
}

export default function Banner({ image, altText = "Page banner" }: BannerProps) {
    return (
        <section className="w-full py-8">
            <div className="w-full max-w-[1400px] mx-auto px-4">
                <div className="w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden rounded-3xl shadow-lg bg-zinc-800">
                <img 
                    src={image} 
                    alt={altText}
                    className="w-full h-full object-cover object-center"
                />
                </div>
            </div>
        </section>
        
    );
}