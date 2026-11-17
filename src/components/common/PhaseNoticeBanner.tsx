import { Info } from 'lucide-react';

interface PhaseNoticeBannerProps {
  title: string;
  body: string;
}

export function PhaseNoticeBanner({ title, body }: PhaseNoticeBannerProps) {
  return (
    <div
      className="rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] p-5 flex items-start gap-3.5"
      role="status"
    >
      <div className="w-9 h-9 rounded-lg bg-white border border-[#C6E3CF] flex items-center justify-center shrink-0 mt-0.5">
        <Info className="w-5 h-5 text-[#16803C]" aria-hidden="true" />
      </div>
      <div>
        <h2 className="font-display text-base font-semibold text-[#14532D]">{title}</h2>
        <p className="mt-1 text-sm text-[#1F2937]/85 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
