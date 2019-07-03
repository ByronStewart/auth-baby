<script context="module">
  export function preload(page, session) {
    const user = session.user;
    if (user == undefined) {
      this.error(500, "you are not allowed in here");
    } else {
      return { user };
    }
  }
</script>

<script>
  export let user;
</script>

<h1>This is supposed to be secret</h1>
<p>{user.username} you are one of the special ones</p>
