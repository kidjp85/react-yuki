import { useRef, useEffect } from 'react';

const useScrollToBottom = <T>(prop: T) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ref.current !== null) {
      const { scrollHeight, clientHeight } = ref.current;

      const maxScrollTop = scrollHeight - clientHeight;

      ref.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [prop]);

  return {
    ref,
    scrollToBottom
  };
};

export default useScrollToBottom;
