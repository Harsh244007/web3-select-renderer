"use client";
import Loading from "@/app/loading";
import { useFetchData } from "@/hooks";
import React, { useState } from "react";
import ParentData from "./TokenRender/ParentTokenRender";
import ChildTokenRender from "./TokenRender/ChildTokenRender";

const TokenItems = () => {
  const { status, response: data } = useFetchData("/api/token");
  const [firstParent, setFirstParent] = useState<null | string>(null);
  const [secondParent, setSecondParent] = useState<null | string>(null);
  const [thirdParent, setThirdParent] = useState<null | string>(null);
  
  if (!data && !status) return <Loading />;
  if (!data && status) return <Loading loadingText={status} />;
  const parentKeys = Object.keys(data || {});

  return (
    <main className="w-full m-auto flex flex-wrap gap-2">
      <ParentData
        setThirdValue={setThirdParent}
        setSecondValue={setSecondParent}
        type="parent"
        values={firstParent}
        dataKeys={parentKeys}
        setValues={setFirstParent}
      />
      {firstParent && data && (
        <ParentData
          type="secondChild"
          values={secondParent}
          setThirdValue={setThirdParent}
          setSecondValue={setSecondParent}
          setValues={setSecondParent}
          dataKeys={Object.keys(data[firstParent])}
        />
      )}

      {firstParent && secondParent && data && (
        <ChildTokenRender values={thirdParent} setValues={setThirdParent} dataKeys={data[firstParent][secondParent]} />
      )}
    </main>
  );
};
export default TokenItems;
