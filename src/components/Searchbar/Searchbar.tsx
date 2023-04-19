import React, { Component } from 'react';
import { ISearchProps,ISearchState } from '../../types/appTypes';
import { Button, ButtonLabel, Form, Header, Input } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component<ISearchProps,ISearchState> {
 
  state = {
    searchName: '',
  };
  hahdleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };
  handleSearchSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      toast.error('Введіть запит!!!');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSearchSubmit}>
          <Button type="submit">
            <FcSearch />
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hahdleSearchChange}
          />
        </Form>
      </Header>
    );
  }
}
