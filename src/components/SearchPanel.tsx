import Search from "antd/lib/input/Search";

import { useActions } from "../hooks/useActions";

const SearchPanel = () => {
  const { search } = useActions();

  const onSearch = (value: string) => setTimeout(()=>search(value), 500);
  return <Search placeholder="input search text" onSearch={onSearch} />;
};

export default SearchPanel;
