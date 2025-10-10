"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const [link, setLink] = useState("");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [qrSize, setQrSize] = useState(256); // tamanho do QR
  const [logo, setLogo] = useState<string | undefined>(undefined);
  const [logoSize, setLogoSize] = useState(64); // tamanho da logo

  // Upload da logo
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setLogo(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-b from-white to-blue-300 overflow-x-hidden">
      <div className="text-center max-w-[100dvw] px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10">
          Gere e costume QR Codes{" "}
          <span className="text-blue-600 font-bold">dinâmicos</span>
        </h1>

        <div className="my-10 flex flex-col md:flex-row items-start md:items-center gap-6 bg-white shadow-lg rounded-2xl p-6 overflow-hidden">
          {/* Left - QR Preview */}
          <div className="flex flex-col items-center gap-4">
            <label className="text-sm font-medium text-gray-700 w-full text-left">
              Digite seu link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Seu link aqui"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
            <div className="mt-4 flex flex-col items-center">
              <QRCodeCanvas
                value={link || " "}
                title={"QR Code Gerado"}
                size={qrSize}
                bgColor={bgColor}
                fgColor={fgColor}
                level={"H"}
                imageSettings={
                  logo
                    ? {
                      src: logo,
                      height: logoSize,
                      width: logoSize,
                      excavate: true,
                    }
                    : undefined
                }
              />
            </div>
          </div>

          {/* Right - Options */}
          <div className="flex flex-col gap-6 w-full md:w-64">
            {/* Colors */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-2">Cores</h2>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500">Cor do QR</label>
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-20 h-10 rounded cursor-pointer"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500">Cor do fundo</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-20 h-10 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Logo */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-2">Logo</h2>
              <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg py-6 cursor-pointer hover:bg-gray-50 transition">
                <span className="text-blue-600 text-sm font-medium">
                  Escolher arquivo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
              </label>

              {/* controle de tamanho da logo */}
              <select
                value={logoSize}
                onChange={(e) => setLogoSize(Number(e.target.value))}
                className="mt-3 w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-500"
              >
                <option value={38}>38px</option>
                <option value={64}>64px</option>
                <option value={98}>98px</option>
              </select>
            </div>

            {/* QR Code Size */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-2">Tamanho do QR</h2>
              <select
                value={qrSize}
                onChange={(e) => setQrSize(Number(e.target.value))}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-500"
              >
                <option value={128}>128px</option>
                <option value={256}>256px</option>
                <option value={512}>512px</option>
              </select>
            </div>

            {/* Download */}
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              onClick={() => {
                const canvas = document.querySelector<HTMLCanvasElement>(
                  "canvas"
                );
                if (!canvas) return;
                const linkEl = document.createElement("a");
                linkEl.href = canvas.toDataURL("image/png");
                linkEl.download = "qrcode.png";
                linkEl.click();
              }}
            >
              Baixar QR Code
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
