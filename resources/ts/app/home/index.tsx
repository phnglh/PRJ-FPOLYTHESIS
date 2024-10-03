import { Button } from "react-aria-components";
import { cn } from "../../lib/cn";

export function HomePage() {
    return (
        <>
            <div className="">
                <h1>home-page content</h1>
                <Button
                    className={cn(
                        "border-collapse border px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white"
                    )}
                >
                    Button
                </Button>
            </div>
        </>
    );
}
