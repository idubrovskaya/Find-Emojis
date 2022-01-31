import { Form } from '../Form/Form';
import { EmojiRow } from '../EmojiRow/EmojiRow';
import { emojies } from '../Emojis';
import { useState } from 'react';

export const EmojiContainer = () => {
  const [emojiSearch, setEmojiSearch] = useState<string>('');

  const chooseEmoji = (emojiTitle: string) => {
    setEmojiSearch(emojiTitle);
  };

  const filteredEmojis = emojies.filter((emoji) => {
    return (
      emoji.title.toLowerCase().includes(emojiSearch.toLowerCase()) ||
      emoji.keywords.toLowerCase().includes(emojiSearch.toLowerCase())
    );
  });

  return (
    <div>
      <Form emojiTitle={emojiSearch} emojiSearch={chooseEmoji} />
      {filteredEmojis.map((emoji) => (
        <EmojiRow icon={emoji.symbol} name={emoji.title} />
      ))}
    </div>
  );
};
