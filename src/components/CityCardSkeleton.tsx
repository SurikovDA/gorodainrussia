import { GlassCard } from "./GlassCard";

export const CityCardSkeleton = () => {
  return (
    <GlassCard padding="none">
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="skeleton h-6 w-32 rounded-lg" />
            <div className="skeleton h-5 w-24 rounded-full" />
          </div>
          <div className="skeleton h-4 w-full rounded-lg mb-1" />
          <div className="skeleton h-4 w-3/4 rounded-lg" />
        </div>

        {/* Population */}
        <div className="flex items-center gap-2 mb-4">
          <div className="skeleton h-4 w-4 rounded" />
          <div className="skeleton h-4 w-24 rounded-lg" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="skeleton h-20 rounded-xl" />
          <div className="skeleton h-20 rounded-xl" />
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <div className="skeleton h-10 flex-1 rounded-xl" />
          <div className="skeleton h-10 w-24 rounded-xl" />
        </div>
      </div>
    </GlassCard>
  );
};
