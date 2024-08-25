export default function DarkBox() {
  return (
    <>
      <div
        className="relative bg-cover bg-center p-12 md:p-20"
        style={{ backgroundImage: `url(/home/office2.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto text-center text-white md:w-1/2">
          <p className="mb-4 font-bold">
            Kemampuan Kustomisasi dan Skalabilitas
          </p>
          <p>
            ERP harus dapat disesuaikan dengan kebutuhan spesifik perusahaan dan
            dapat berkembang seiring pertumbuhan bisnis.
          </p>
        </div>
      </div>
    </>
  );
}
