defmodule Quackbox.Games.AudienceMember do
  use Ecto.Schema
  import Ecto.Changeset

  schema "audience_members" do
    field :name, :string
    
    belongs_to :room, Quackbox.Games.Room

    timestamps()
  end

  @doc false
  def changeset(audience_member, attrs, room) do
    audience_member
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> put_assoc?(:room, room)
  end

  defp put_assoc?(changes, _atom, nil) do
    add_error(changes, :access_code, "does not exist.")
  end
  defp put_assoc?(changes, atom, records) do
    put_assoc(changes, atom, records)
  end
end
