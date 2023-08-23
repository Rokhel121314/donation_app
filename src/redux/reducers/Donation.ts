import {createSlice} from '@reduxjs/toolkit';
import {donationItems, DonationItemType} from '../../datas/donationItems';

const initialState = {
  items: donationItems,
  selectedDonationId: null,
  selectedDonationInformation: <DonationItemType | undefined>{},
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
    setSelectedDonationInformation: (state, action) => {
      state.selectedDonationInformation = state.items.find(value => {
        return value.donationItemId === action.payload;
      });
    },
  },
});

export default Donations.reducer;
export const {
  resetDonations,
  updateSelectedDonationId,
  setSelectedDonationInformation,
} = Donations.actions;
