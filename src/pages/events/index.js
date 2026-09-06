/**
 * 五特活 — the order the homepage grid shows them in.
 *
 * Each entry is the CONTENT object from that page, so a activity is described
 * in exactly one file: its card, its modal and its page all read the same
 * object and cannot drift apart. Reorder here to reorder the homepage.
 */

import { CONTENT as xxy } from './XXY';
import { CONTENT as qzh } from './QZH';
import { CONTENT as daxiang } from './DaXiang';
import { CONTENT as quanbian } from './QuanBian';
import { CONTENT as boshu } from './BoShu';
export const events = [
  xxy,
  qzh,
  daxiang,
  quanbian,
  boshu,
];
