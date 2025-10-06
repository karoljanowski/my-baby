import { DiscoverDiaryList as TDiscoverDiaryList } from "@/lib/types";
import BorderImage from "@/components/BorderImage";

type DiscoverDiaryItemProps = {
    item: TDiscoverDiaryList;
}

const DiscoverDiaryItem = ({ item }: DiscoverDiaryItemProps) => {
    return (
        <div key={item.id} className="snap-center shrink-0 w-full md:w-auto md:shrink">
            <div className="flex flex-col">
                <BorderImage src={item.image} alt={item.alt} width={400} height={400} className="aspect-square" containerClassName="mb-8 max-w-[400px] lg:max-w-none" />
                <h3 className="text-2xl leading-[120%] mb-6 text-dark -tracking-[0.06em]">{item.title}</h3>
                <p className="text-base leading-[150%] font-light">{item.description}</p>
            </div>
        </div>
    );
};

export default DiscoverDiaryItem;