import dynamic from "next/dynamic";

const TokenItems = dynamic(() => import("./TokenItems/TokenItems"));

export { TokenItems };
