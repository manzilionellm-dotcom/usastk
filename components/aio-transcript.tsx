/**
 * Injectable transcript for a hosted tutorial video.
 * Pass null while no video exists — nothing is rendered, and no transcript is invented.
 * When a transcript is supplied it is in the SSR DOM (class aio-transcript).
 */
export function AioTranscript({ transcript }: { transcript: string | null }) {
  if (!transcript) return null;
  return (
    <div className="aio-transcript mt-6" data-aio-transcript="">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#F5F6F8]">
        Video transcript
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[#A8AEBC]">{transcript}</p>
    </div>
  );
}
