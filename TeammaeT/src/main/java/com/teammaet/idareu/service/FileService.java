package com.teammaet.idareu.service;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.awt.image.WritableRaster;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@Service
public class FileService {

    public byte[] extractBytes(String ImageName) throws IOException {
        String extension = FilenameUtils.getExtension(ImageName);
        BufferedImage bufferedImage = ImageIO.read(getClass().getResource(ImageName));
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, extension, byteArrayOutputStream);
        return byteArrayOutputStream.toByteArray();
    }
}
