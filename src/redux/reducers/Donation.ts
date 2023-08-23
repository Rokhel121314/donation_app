import {createSlice} from '@reduxjs/toolkit';
import {donationItems} from '../../datas/donationItems';

const initialState = {
  items: donationItems,
  selectedDonationId: null,
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
    },
  },
});

export default Donations.reducer;
export const {resetDonations, updateSelectedDonationId} = Donations.actions;
