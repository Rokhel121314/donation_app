import {View, TextInput, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

type PropType = {
  onSearch: (searchValue: string) => void;
};

const Search = (props: PropType) => {
  const [search, setSearch] = useState('');
  const textInpurRef = useRef<TextInput>(null);

  const handleFocus = () => {
    textInpurRef.current?.focus();
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color="#25c0ff" size={22} />
      <TextInput
        onChangeText={value => handleSearch(value)}
        ref={textInpurRef}
        style={style.searchInput}
      />
    </Pressable>
  );
};

Search.default = {
  onSearch: () => {},
};

export default Search;
