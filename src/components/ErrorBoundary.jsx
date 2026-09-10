import { Component } from 'react';

/**
 * ErrorBoundary — the difference between a blank page and a way out.
 *
 * React unmounts the whole tree when a render throws, so without this one bad
 * value anywhere — a department added with no `accentHex`, a photo entry that
 * is a string where an object was expected — leaves the visitor on a white
 * screen with nothing to click and no idea what happened.
 *
 * This is deliberately not a debugging tool. It says the page failed, offers
 * the two things that actually recover it, and prints the detail to the
 * console for whoever is fixing it rather than onto the page.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error('页面渲染失败 / Page render failed:', error, info);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-soft-radial px-6 text-center text-ink">
        <p className="font-latin text-xs font-semibold uppercase tracking-widest3 text-umred/68">
          出了点问题
        </p>
        <h1 className="max-w-xl text-3xl font-semibold leading-snug">
          这个页面暂时无法显示。
        </h1>
        <p className="max-w-md text-sm leading-[1.85] text-black/58">
          请稍后再试。如果一直出现这个画面，欢迎通过页尾的电邮告诉我们。
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          {/* A full reload, not a router navigation: whatever threw is still in
              the component tree, so re-rendering it in place would throw again. */}
          <button type="button" onClick={() => window.location.reload()} className="btn-primary">
            重新载入
          </button>
          <a href="/" className="btn-secondary">返回首页</a>
        </div>
      </main>
    );
  }
}
