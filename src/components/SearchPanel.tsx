import Search from "antd/lib/input/Search";

const SearchPanel = () => {
  const onSearch = (value: string) => console.log(value);
  return <Search placeholder="input search text" onSearch={onSearch} />;
};

export default SearchPanel;
