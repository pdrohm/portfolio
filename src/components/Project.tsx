import React from "react";

type Props = {
  index: number;
  project: any;
};

export default function Project({ index, project }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen p-15 md:p-40">
      <img
        className="xl:w-auto xl:h-auto w-72 h-72"
        src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
        alt=""
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h3 className="xl:text-3xl text-xl text-center">
          <span className="underline decoration-blue xl:text-4xl text-2xl">
            Case of Study {index + 1} of 3:
          </span>{" "}
          TESTE 1
        </h3>
        <p className="text-center md:text-left lg:text-lg text-sm leading-tight overflow-y-auto max-h-80 px-9  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis enim erat, at fermentum nisl vestibulum ac. Phasellus et
          tempus turpis. Pellentesque eget commodo risus. Maecenas tincidunt nec
          libero bibendum varius. Donec nisi orci, finibus sit amet libero ac,
          ullamcorper maximus eros. Sed ut neque odio. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Curabitur vehicula nisi a
          turpis auctor dapibus. Nullam suscipit ex nec risus maximus blandit.
          Pellentesque at urna scelerisque, egestas lectus pretium, viverra
          ipsum. Nunc mi risus, dictum nec mauris quis, vehicula ullamcorper
          sapien. Aenean consectetur neque vitae eros aliquam aliquet et vel
          metus. Aliquam rutrum nisi augue, et imperdiet urna egestas at.
          Curabitur feugiat, velit sit amet interdum pellentesque, augue lectus
          aliquam est, at pulvinar nibh urna id eros. Duis tristique lectus in
          purus pharetra eleifend. Proin enim elit, tempor ac mauris vitae,
          vehicula accumsan nisl.
        </p>
      </div>
    </div>
  );
}
