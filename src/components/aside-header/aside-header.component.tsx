import { Button } from "../button";

export const AsideHeader = () => {
  return (
    <aside className="flex flex-col h-[100vh] min-w-[280px] bg-primary items-center justify-between py-6 px-8 sticky">
      <div />

      <div className="flex flex-col items-center justify-center w-full">
        <img src="/header.webp" className="w-[180px] mb-6" />

        <span className="text-white text-xl font-light mb-2">Portfólio</span>
        <div className="flex w-full flex-col gap-2">
          <Button onClick={() => null}>Illustração</Button>
          <Button onClick={() => null}>Design</Button>
          <Button onClick={() => null}>Motion</Button>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-5 mt-8 mb-6">
          <a href="https://www.instagram.com/lucashb96" target="_blank">
            <img src="/icons/instagram.png" className="w-[20px] invert-100" />
          </a>

          <a href="mailto:lucashb96@gmail.com" target="_blank">
            <img src="/icons/mail.png" className="w-[23px] invert-100" />
          </a>

          <a href="/sobre">
            <img src="/icons/info.png" className="w-[20px] invert-100" />
          </a>
        </div>
      </div>

      <span className="text-xs font-semibold">
        © 2024-{new Date().getFullYear()} Lucas H. Brito
      </span>
    </aside>
  );
};
