import { ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  '填写会员申请表，分享你的兴趣与期望。',
  '与委员会成员见面，配对最适合你的活动。',
  '参与活动、贡献创意，拓展你的人脉圈子。',
];

export function JoinPage() {
  return (
    <main className="min-h-screen bg-soft-radial px-4 py-8 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-18">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black/50 transition duration-300 hover:text-umred"
        >
          <ChevronLeft className="h-4 w-4" />
          返回首页
        </Link>

        <div className="mt-9 rounded-[42px] border border-black/6 bg-white p-9 shadow-soft sm:p-14">
          <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
            加入 PBCUM
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.18] tracking-[-0.05em] sm:text-6xl">
            开启与马大华文学会的旅程。
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-[1.85] text-black/58">
            成为这个精致、以文化为核心的学生社群的一份子，专注于领导力培养、语言传承与校园正面影响力。
          </p>

          <div className="mt-11 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-black/6 bg-[#fafafa] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <CheckCircle2 className="h-5 w-5 text-umred" />
                <p className="mt-5 text-sm leading-[1.85] text-black/62">
                  <span className="font-latin mr-1 font-semibold text-ink">0{index + 1}.</span>{step}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScwxdpARvJlyls5h1IqQwcXGZcf5MSGtQ6EmQoQ4C9nngRkwQ/closedform"
              className="btn-primary"
            >
              立即报名加入
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="btn-secondary">
              浏览学会网站
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
