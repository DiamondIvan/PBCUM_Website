/**
 * 七小组 — the order the homepage grid shows them in.
 *
 * Each entry is the CONTENT object from that page, so a group is described
 * in exactly one file: its card, its modal and its page all read the same
 * object and cannot drift apart. Reorder here to reorder the homepage.
 */

import { CONTENT as xiangsheng } from './XiangSheng';
import { CONTENT as wenhua } from './WenHua';
import { CONTENT as bianlun } from './BianLun';
import { CONTENT as huawenban } from './HuaWenBan';
import { CONTENT as yaolanshou } from './YaoLanShou';
import { CONTENT as shengxun } from './ShengXun';
import { CONTENT as shefu } from './SheFu';
export const departments = [
  xiangsheng,
  wenhua,
  bianlun,
  huawenban,
  yaolanshou,
  shengxun,
  shefu,
];
