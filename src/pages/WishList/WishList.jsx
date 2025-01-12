import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  CardActionArea,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { DeleteCollectionModal, EditNameModal } from "./modals/Modals";

export default function WishlistPage({ wishlistItems, collections }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleOpenDelete = () => setOpenDeleteModal(true);
  const handleCloseDelete = () => setOpenDeleteModal(false);
  const handleOpenEdit = () => setOpenEditModal(true);
  const handleCloseEdit = () => setOpenEditModal(false);

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
  };

  const handleBackClick = () => {
    setSelectedCollection(null);
  };

  const handleDelete = () => {
    setSelectedCollection(null);
    handleCloseDelete();
  };

  const handleEdit = (newName) => {
    handleCloseEdit();
  };

  const renderHome = () => (
    <>
      {/* Collections Section */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Collections
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#FF8B3E",
              "&:hover": { bgcolor: "#e67e38" },
            }}
          >
            Create
          </Button>
        </Box>
        <Grid container spacing={3}>
          {collections.map((collection) => (
            <Grid item xs={6} md={4} key={collection.id}>
              <Card sx={{ boxShadow: "none", bgcolor: "transparent" }}>
                <CardActionArea
                  onClick={() => handleCollectionClick(collection)}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      height="300"
                      image={collection.image}
                      alt={collection.title}
                      sx={{
                        objectFit: "cover",
                        borderRadius: 1,
                        mb: 1.5,
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.primary",
                        fontWeight: 500,
                        fontSize: "1rem",
                      }}
                    >
                      {collection.title}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* All Wishlist Section */}
      <Box sx={{ margin: "0 auto" }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ mb: 2, fontWeight: 500, color: "text.primary" }}
        >
          All Wishlist
        </Typography>
        <Grid container spacing={2}>
          {wishlistItems.map((item) => (
            <Grid item xs={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 1,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                }}
              >
                <Box sx={{ position: "relative", paddingTop: "100%" }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      padding: "4px",
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 25, color: "#FF985F" }} />
                  </IconButton>
                </Box>
                <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 0.5,
                      fontWeight: 500,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      Rs.{item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        textDecoration: "line-through",
                      }}
                    >
                      Rs.{item.originalPrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FF8B3E",
                        fontWeight: 500,
                      }}
                    >
                      {Math.round(
                        ((item.originalPrice - item.price) /
                          item.originalPrice) *
                          100
                      )}
                      % OFF
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );

  const renderCollection = () => (
    <>
      {/* Collection Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            {selectedCollection.title}
          </Typography>
          <IconButton onClick={handleOpenEdit}>
            <EditIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF8B3E",
            "&:hover": { bgcolor: "#e67e38" },
          }}
          onClick={handleOpenDelete}
        >
          Delete
        </Button>
      </Box>

      {/* Collection Items */}
      <Grid container spacing={2}>
        {wishlistItems.map((item) => (
          <Grid item xs={6} md={4} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
              }}
            >
              <Box sx={{ position: "relative", paddingTop: "100%" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    padding: "4px",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 25, color: "#FF985F" }} />
                </IconButton>
              </Box>
              <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 0.5,
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    Rs.{item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "line-through",
                    }}
                  >
                    Rs.{item.originalPrice}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FF8B3E",
                      fontWeight: 500,
                    }}
                  >
                    {Math.round(
                      ((item.originalPrice - item.price) / item.originalPrice) *
                        100
                    )}
                    % OFF
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>
      {selectedCollection ? renderCollection() : renderHome()}

      <EditNameModal
        open={openEditModal}
        handleClose={handleCloseEdit}
        onEdit={handleEdit}
        initialValue={selectedCollection?.title}
      />
      <DeleteCollectionModal
        open={openDeleteModal}
        handleClose={handleCloseDelete}
        onDelete={handleDelete}
        collectionName={selectedCollection?.title}
      />
    </Box>
  );
}
