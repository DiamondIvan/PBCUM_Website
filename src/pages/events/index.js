/**
 * 五特活 — the order the homepage grid shows them in.
 *
 * Each entry is the CONTENT object from that page, so a activity is described
 * in exactly one file: its card, its modal and its page all read the same
 * object and cannot drift apart. Reorder here to reorder the homepage.
 */

import { withoutScaffold } from '../../data/publishing';
import { CONTENT as xxy } from './XXY';
import { CONTENT as qzh } from './QZH';
import { CONTENT as daxiang } from './DaXiang';
import { CONTENT as quanbian } from './QuanBian';
import { CONTENT as boshu } from './BoShu';

/** Every activity, finished or not. Only the router uses this, to tell a
 *  not-yet-written page apart from a slug that never existed. */
export const allEvents = [
  xxy,
  qzh,
  daxiang,
  quanbian,
  boshu,
];

/* What the site shows — all five, including the four still being written.
   `withoutScaffold` drops any field still holding its `// TODO` example, so an
   unfinished activity keeps its card and its page but shows a "being written"
   note instead of scaffold text where the words are not ready. Replace an
   example with real content and that field simply appears; fill them all in
   and the item stops counting as a draft. No edit to this file either way.
   See src/data/publishing.js. */
export const events = allEvents.map(withoutScaffold);
