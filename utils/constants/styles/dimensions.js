import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const PIXELS = 16;

export const HEADER_HEIGHT = HEIGHT * 1.25/20;
export const MAIN_HEIGHT = HEIGHT * 17.5/20;
export const NAV_HEIGHT = HEIGHT * 1.25/20;
export const MAIN_FULL_HEIGHT = MAIN_HEIGHT + NAV_HEIGHT;

export const BUTTON_HEIGHT = PIXELS * 3;
export const BUTTON_WIDTH = PIXELS * 10;

export const IMAGE_CAROUSEL_WIDTH =  WIDTH - PIXELS * 6;
export const IMAGE_CAROUSEL_HEIGHT =  IMAGE_CAROUSEL_WIDTH * 2/3;
export const ITEM_LIST_HEIGHT = MAIN_HEIGHT - IMAGE_CAROUSEL_HEIGHT - BUTTON_HEIGHT;

export const ICON_SIZE = PIXELS * 1.8;