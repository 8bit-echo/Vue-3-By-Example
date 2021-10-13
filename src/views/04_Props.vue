<template>
  <div class="props">
    <h1>Props: Passing data to children</h1>
    <p>
      Props look like custom HTML attributes, but they can contain any kind of data.<br />
      Components that have <code>&lt;slot&gt;</code>s can accept additional HTML or other components
    </p>

    <Footnote message="this is the default style with an image in the slot">
      <img src="https://images.vexels.com/media/users/3/128917/isolated/preview/3fa111197f6aee0add60c05829d0f196-exclamation-point-icon-by-vexels.png" />
    </Footnote>

    <Footnote type="note" message="this is a note" />
    <Footnote type="okay" message="this is good" />
    <Footnote type="warning" message="this is a warning" />
    <Footnote type="error" message="this is an error" />
  </div>
</template>

<script>
import Footnote from '../components/Footnote';
export default {
  name: 'Props',
  components: { Footnote },
};
</script>
