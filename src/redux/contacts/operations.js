import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/contacts`, contact, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`
        }
      });
      toast.success('Contact added successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contact }, thunkAPI) => {
    try {
      const response = await axios.patch(`${BASE_URL}/contacts/${id}`, contact, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`
        }
      });
      toast.success('Contact updated successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to update contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`
        }
      });
      toast.success('Contact deleted successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 