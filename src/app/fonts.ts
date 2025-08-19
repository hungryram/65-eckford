import { Inter } from 'next/font/google';
import localFont from "next/font/local"

export const bodyFont = localFont({
  src: './ArkibalDisplayRegular.otf',
  display: 'swap',
  variable: '--body-font'
});
 
export const headingFont = localFont({
  src: './AveresTitleRoman-Regular.otf',
  display: 'swap',
  variable: '--heading-font'
});