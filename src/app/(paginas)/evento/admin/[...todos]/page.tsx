export default function PaginaAdminEvento(props: any) {
  const id = props.params.todos[0];
  const senha = props.params.todos[1];

  return (
    <div>
      <p>{id}</p>
      <p>{senha}</p>
    </div>
  );
}
