'use client';

import styles from './page.module.sass';
import { useEffect, useState } from 'react';
import { notFound, usePathname } from 'next/navigation';
import { fetchStreamers } from '@/utils/fetchStreamers';
import { getStreamerId } from '@/utils/getStreamerId';
import { StreamerDetails } from '@/components/StreamerDetails/StreamerDetails';
import { LoadingSpinner } from '@/ui/LoadingSpinner/LoadingSpinner';
import { Modal } from '@/components/Modal/Modal';
import { StreamerForm } from '@/components/StreamerForm/StreamerForm';

const Streamer = () => {
  const [streamer, setStreamer] = useState<undefined | Streamer>(undefined);
  const [loadingError, setLoadingError] = useState(false);
  const [editingStreamer, setEditingStreamer] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    syncStreamer();
  }, []);

  const syncStreamer = async () => {
    const streamerId = getStreamerId(pathname);
    const streamer = await fetchStreamers(streamerId);
    if (!streamer) {
      setLoadingError(true);
    } else {
      setStreamer(streamer);
    }
  };

  if (!streamer && loadingError) notFound();

  return (
    <main className={styles.main}>
      {streamer ? (
        <StreamerDetails data={streamer} syncStreamer={syncStreamer} editStreamer={setEditingStreamer} />
      ) : (
        <LoadingSpinner />
      )}
      {editingStreamer && (
        <Modal setActive={setEditingStreamer}>
          <StreamerForm syncStreamers={syncStreamer} initialStreamerData={streamer} />
        </Modal>
      )}
    </main>
  );
};

export default Streamer;
