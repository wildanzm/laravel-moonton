import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickity = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <Authenticated>
                <Head title="Dashboard">
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickity}>
                        {[1, 2, 3, 5, 6].map((i) => (
                            <FeaturedMovie
                                key={i}
                                slug={`the-batman`}
                                name={`The Batman ${i}`}
                                category={`Action`}
                                rating={i + 1}
                                thumbnail={`https://picsum.photos/id/${i}/300/300`}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-12">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickity}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                name={`The Meong ${i}`}
                                category={`Cartoon`}
                                slug={`the-meong`}
                                thumbnail={`https://picsum.photos/id/${i}/300/300`}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
