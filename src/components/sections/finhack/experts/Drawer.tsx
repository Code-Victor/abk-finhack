import { activeExpertStore } from "@/stores";
import { useStore } from "@nanostores/react";
import { Drawer } from "vaul";

export function ExpertDrawer() {
  const $activeExpert = useStore(activeExpertStore);
  function onClose() {
    activeExpertStore.set(null);
  }
  return (
    <Drawer.Root open={!!$activeExpert} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="z-[999] bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
            <div className="mx-auto w-12 md:w-24 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-2xl mx-auto">
              <Drawer.Title className="font-medium mb-4 font-adoha text-2xl md:text-3xl">
                {$activeExpert?.role}
              </Drawer.Title>
              <div className="flex flex-col md:flex-row gap-4 relative">
                <div className="judge-card md:sticky md:top-0 flex flex-col gap-2 max-w-[240px] mx-auto">
                  <div className="relative overflow-hidden">
                    <div className="rounded-xl overflow-hidden expert-gradient">
                      <img
                        src={$activeExpert?.image.src}
                        alt="avatar"
                        width={$activeExpert?.image.width}
                        height={$activeExpert?.image.height}
                        className="active-expert-image object-cover w-full"
                      />
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="active-expert-name font-semibold text-sm md:text-xl">
                      {$activeExpert?.name}
                    </h3>
                    <p className="active-expert-title text-xs md:text-base italic text-[#6E6E6E] font-medium">
                      {$activeExpert?.title}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  {$activeExpert?.bio
                    .split("\n")
                    .map((p) => <p className="mb-2 text-sm">{p}</p>)}
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
