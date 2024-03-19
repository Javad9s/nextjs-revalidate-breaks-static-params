interface Props {
  params: {
    id: string;
  };
}
export const dynamicParams = false;
export function generateStaticParams() {
  const ids = [{ id: "01" }, { id: "02" }];
  return ids;
}

export default function Page({ params: { id } }: Props) {
  return <div>{`Params : ${id}`}</div>;
}
