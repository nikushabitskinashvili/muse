"use client";
import { PlaylistHero } from "@/app/components/PlaylistHero/PlaylistHero";
import styles from "./playlistDetail.module.scss";
import { playlistData } from "@/app/data/CarouselData";
import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import { useEffect, useState } from "react";
import { ReusableModal } from "@/app/components/reusableModal/reusableModal";

export default function PlaylistPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [openPen, setOpenPen] = useState(false);

  const handleCloseModal = () => {
    setOpenPen(false);
  };
  const handleOpenModal = () => {
    setOpenPen(true);
  };

  useEffect(() => {
    if (openPen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openPen]);

  const playlistId = parseInt(id);

  const playlist = playlistData.find((p) => p.id === playlistId);

  if (!playlist) {
    return <div className={styles.playlistNotFound}>Playlist not found</div>;
  }

  return (
    <main className={styles.playlistDetailMain}>
      <div className={styles.playlistDetailWrapper}>
        <PlaylistHero
          image={playlist.img}
          playlistName={playlist.title}
          totalTracks={playlist.totalTracks}
          totalTime={playlist.totalTime}
          openModal={handleOpenModal}
        />
        <div className={styles.playlistDetalForyou}>
          <MusicWrapper />
        </div>
      </div>
      {openPen && (
        <div className={styles.modalOverlay}>
          <ReusableModal
            title="Edit Playlist"
            label="Rename"
            placeholder="Playlist name"
            closeModal={handleCloseModal}
          />
        </div>
      )}
    </main>
  );
}
