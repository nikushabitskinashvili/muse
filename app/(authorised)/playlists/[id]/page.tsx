"use client";
import { PlaylistHero } from "@/app/components/PlaylistHero/PlaylistHero";
import styles from "./playlistDetail.module.scss";
import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import { useEffect, useState } from "react";
import { ReusableModal } from "@/app/components/reusableModal/reusableModal";
import Axios from "@/app/Helpers/Axios";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { decodeJwt } from "jose";

export default function PlaylistPage({
                                       params: { id },
                                     }: {
  params: { id: string };
}) {
  const [openPen, setOpenPen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [playlistDetail, setPlaylistDetail] = useState<any>(null);
  console.log(playlistDetail);

  useEffect(() => {
    const fetchPlayListDetail = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      if (!token) {
        console.error("No token found");
        return;
      }
      const user = decodeJwt(token);

      if (!user || !user.id) {
        console.error("Invalid token payload");
        return;
      }
      try {
        const response = await Axios.get(`/playlist/${user.id}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPlaylistDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlayListDetail();
  }, [id]);

  const handleSuccessUpdate = (newName: string) => {
    setPlaylistDetail((prevState: any) => ({
      ...prevState,
      name: newName,
    }));
  };

  const handleCloseModal = () => {
    setOpenPen(false);
  };

  const handleOpenModal = () => {
    setOpenPen(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
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

  // const playlistId = parseInt(id);
  // const playlist = playlistData.find((p) => p.id === playlistId);
  //
  // if (!playlist) {
  //   return <div className={styles.playlistNotFound}>Playlist not found</div>;
  // }

  return (
    <div className={styles.playlistDetailMain}>
      <div className={styles.playlistDetailWrapper}>
        <div className={styles.heroWrapper}>
          <PlaylistHero
            image={
              "https://thewritepractice.com/wp-content/uploads/2019/08/Punctuating-Song-Titles.jpg"
            }
            playlistName={playlistDetail?.name}
            openModal={handleOpenModal}
            openDeleteModal={handleOpenDeleteModal}
            id={id}
          />
        </div>
        <div className={styles.playlistDetalForyou}>
          <MusicWrapper playlistId={id} isBin={true} text="playlistId" id={id} />
        </div>
      </div>
      {openDeleteModal && (
        <div className={styles.modalOverlay}>
          <ReusableModal
            title="Delete Playlist"
            label="Rename"
            placeholder={playlistDetail?.name}
            closeModal={handleCloseDeleteModal}
            id={id}
            text="Lorem ipsum dolor sit amet consectetur."
            delete={true}
          />
        </div>
      )}
      {openPen && (
        <div className={styles.modalOverlay}>
          <ReusableModal
            title="Edit Playlist"
            label="Rename"
            placeholder={playlistDetail?.name}
            closeModal={handleCloseModal}
            id={id}
            onSuccessUpdate={handleSuccessUpdate}
          />
        </div>
      )}
    </div>
  );
}
