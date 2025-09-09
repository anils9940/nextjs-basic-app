import Image from "next/image";
import HeroPage from "@/components/hero";

export default function Home() {
    return (
        <div className={'relative h-screen'}>
            <div>
                <HeroPage/>
            </div>
        </div>
    );
}
