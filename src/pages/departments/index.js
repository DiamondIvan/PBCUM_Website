/**
 * 七小组 — the order the homepage grid shows them in.
 *
 * Each entry is the CONTENT object from that page, so a group is described
 * in exactly one file: its card, its modal and its page all read the same
 * object and cannot drift apart. Reorder here to reorder the homepage.
 */

import { withoutScaffold } from '../../data/publishing';
import { CONTENT as xiangsheng } from './XiangSheng';
import { CONTENT as wenhua } from './WenHua';
import { CONTENT as bianlun } from './BianLun';
import { CONTENT as huawenban } from './HuaWenBan';
import { CONTENT as yaolanshou } from './YaoLanShou';
import { CONTENT as shengxun } from './ShengXun';
import { CONTENT as shefu } from './SheFu';
/** Every group, finished or not — the router uses this to tell a page that is
 *  still being written apart from a slug that never existed. */
export const allDepartments = [
  xiangsheng,
  wenhua,
  bianlun,
  huawenban,
  yaolanshou,
  shengxun,
  shefu,
];

/* All seven are written, so this currently changes nothing. It is here so a
   new group added as a scaffold behaves like the unfinished 五特活 do: listed,
   but with the unwritten fields stripped rather than showing `// TODO` on
   screen. */
export const departments = allDepartments.map(withoutScaffold);
