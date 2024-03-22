"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Bertanya() {
  const [nama, setNama] = useState<string>("");
  const [kelas, setKelas] = useState<string>("");
  const [waktu, setWaktu] = useState<string>("Pagi");
  const [gender, setGender] = useState<string>("Pak");
  const [keperluan, setKeperluan] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleNamaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value);
  };

  const handleKelasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKelas(event.target.value);
  };

  const handleWaktuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWaktu(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleKeperluanChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setKeperluan(event.target.value);
  };

  const chat = `Assalamu'alaikum wr. wb. Selamat ${waktu}, ${gender}. Mohon maaf mengganggu waktunya, saya ${nama} dari kelas ${kelas}, izin bertanya terkait ${keperluan}. Terima kasih banyak atas waktunya ${gender}. Wassalamu'alaikum wr. wb.`;

  return (
    <section className="w-full">
      <div className="mt-10 grid grid-cols-1 md:gap-3 md:grid-cols-3 md:mb-40">
        <div className="poppins md:col-span-2 md:pl-40 pl-5 px-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Contoh : Alfarizi"
              className="input input-bordered w-full max-w-xs"
              value={nama}
              onChange={handleNamaChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Kelas</span>
            </div>
            <input
              type="text"
              placeholder="Contoh : TI22A Semester 4"
              className="input input-bordered w-full max-w-xs"
              value={kelas}
              onChange={handleKelasChange}
            />
          </label>

          <label>
            <div className="label">
              <span className="label-text">Waktu</span>
            </div>
            <select
              className="select select-bordered w-full max-w-xs"
              value={waktu}
              onChange={handleWaktuChange}
            >
              <option>Pagi</option>
              <option>Siang</option>
              <option>Malam</option>
            </select>
          </label>

          <label>
            <div className="label">
              <span className="label-text">Pak / Bu</span>
            </div>
            <select
              className="select select-bordered w-full max-w-xs"
              value={gender}
              onChange={handleGenderChange}
            >
              <option>Pak</option>
              <option>Bu</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Keperluan</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Contoh : Perkuliahan hari ini"
              value={keperluan}
              onChange={handleKeperluanChange}
            ></textarea>
          </label>
        </div>
        <div
          className="flex w-full mt-10 justify-center rounded"
          style={{
            backgroundImage:
              "url(https://www.wallpapertip.com/wmimgs/1-13180_wallpaper-background-whatsapp-default-dark-green-download-wallpaper.jpg)",
          }}
        >
          <div className="chat chat-start p-5">
            <div className="chat-bubble">{chat}</div>
          </div>

          <CopyToClipboard
            text={chat}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <button className="btn btn-ghost text-white">
              {copied ? "Copied" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </section>
  );
}

export default Bertanya;
