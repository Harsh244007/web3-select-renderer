import { Dispatch, SetStateAction } from "react";

export type Token = {
  name: string;
};

export type TokenItem = {
  tokenOne?: Token;
  tokenTwo?: Token;
};

type ApiResponsSecondParent = {
  [key: string]: TokenItem[];
};

type ApiResponse = {
  [key: string]: ApiResponsSecondParent;
};

export type useFetchDataType = {
  status: string;
  response: null | ApiResponse;
};

export type ChildTokenRenderProps = {
  dataKeys: TokenItem[];
  values: string | null;
  setValues: Dispatch<SetStateAction<string | null>>;
};

export type ParentTokenRenderProps = {
  type: string;
  values: string | null;
  setValues: Dispatch<SetStateAction<string | null>>;
  setThirdValue: Dispatch<SetStateAction<string | null>>;
  setSecondValue: Dispatch<SetStateAction<string | null>>;
  dataKeys: string[];
};
