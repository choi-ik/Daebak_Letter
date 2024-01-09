import { useState } from 'react';
import Search from '@/assets/Search.svg';
import { SearchBarContainer } from './index.style';

interface Props {
  placeholder: string;
}
function SearchBar(props: Props) {
  const { placeholder = '채널명을 입력해주세요.' } = props;
  const [keyword, setKeyword] = useState<string>('');
  function handleInputChange(keyword: string) {
    setKeyword(keyword);
  }
  return (
    <SearchBarContainer>
      <input
        type="text"
        value={keyword}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
      />
      <img
        src={Search}
        alt="search-button"
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
